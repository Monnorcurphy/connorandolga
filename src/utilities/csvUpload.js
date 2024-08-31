import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import Papa from 'papaparse'; // We'll use this library to parse CSV

export const uploadGuestsFromCSV = async (csvFile) => {
    const db = getFirestore();
    const guestsRef = collection(db, 'guests');

    return new Promise((resolve, reject) => {
        Papa.parse(csvFile, {
            header: true,
            complete: async (results) => {
                const guests = results.data;
                let uploadedCount = 0;
                let skippedCount = 0;

                for (let guest of guests) {
                    // Check if any of the emails already exist
                    const emails = guest.emails.split(',').map(email => email.trim());
                    const q = query(guestsRef, where('emails', 'array-contains-any', emails));
                    const querySnapshot = await getDocs(q);

                    if (querySnapshot.empty) {
                        // No existing guest with these emails, add new guest
                        await addDoc(guestsRef, {
                            emails: emails,
                            names: guest.names.split(',').map(name => name.trim()),
                            type: emails.length > 1 ? 'couple' : 'individual',
                            guestType: guest.guestType,
                            rsvp: {
                                attending: false,
                                foodChoices: []
                            }
                        });
                        uploadedCount++;
                    } else {
                        skippedCount++;
                    }
                }

                resolve({ uploadedCount, skippedCount });
            },
            error: (error) => {
                reject(error);
            }
        });
    });
};