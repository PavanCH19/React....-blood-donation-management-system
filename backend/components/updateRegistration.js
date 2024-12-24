const conn = require("../connection.js");

exports.updateDonarRegistration = (req, res) => {
    const { uniqueId, password, name, email, age, selectedBlood, selectedGender, selectedState, selectedDistrict, selectedTaluq, selectedCity, address, mobileNumber } = req.body;
    // Check if the donor exists and retrieve the password
    conn.query("SELECT donarPassword FROM donarregistration WHERE donarId = ?", [uniqueId], (err, results) => {
        if (err) {
            console.error('Error checking existing password:', err);
            return res.status(500).json({ message: 'Error checking existing password' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Donor not found' });
        }

        // Compare passwords
        if (results[0].donarPassword !== password) {
            return res.status(401).json({ message: 'Incorrect password, update failed' });
        }

        // Proceed with updating the donor data if passwords match
        const updateQuery = `
    UPDATE donarregistration 
    SET 
        donarName = ?, 
        donarNumber = ?, 
        donarEmail = ?, 
        donarAge = ?, 
        donarBloodGroup = ?, 
        donarGender = ?, 
        donarState = ?, 
        donarDistrict = ?, 
        donarTaluq = ?, 
        donarCity = ?, 
        donarAddress = ?, 
        donarPassword = ?
    WHERE donarId = ?`;

        const values = [
            name,             // donarName
            mobileNumber,     // donarNumber (String)
            email,            // donarEmail (String)
            age,              // donarAge (Integer)
            selectedBlood,    // donarBloodGroup (String)
            selectedGender,   // donarGender (Enum)
            selectedState,    // donarState (String)
            selectedDistrict, // donarDistrict (String)
            selectedTaluq,  // donarTaluq (nullable String, null if empty)
            selectedCity,     // donarCity (String)
            address || null,  // donarAddress (nullable String, null if empty)
            password,         // donarPassword (hashed password)
            // donarAvailability (Default to 1 if not provided)
            uniqueId          // donarId (String, used in WHERE clause)
        ];
        console.table(req.body)
        conn.query(updateQuery, values, (error) => {
            if (error) {
                console.error('Error updating donor data:', error);
                return res.status(500).json({ message: 'Error updating donor data' });
            }
            return res.status(200).json({ message: 'Donor data updated successfully' });
        });
    });
};




exports.updateBloodBank = (req, res) => {
    const { uniqueId, password, name, email, mobileNumber, selectedState, selectedDistrict, selectedTaluq, selectedCity, address } = req.body;
    // Check if the blood bank exists and retrieve the password
    conn.query("SELECT bloodBankPassword FROM blood_bank_registration WHERE bloodBankId = ?", [uniqueId], (err, results) => {
        if (err) {
            console.error('Error checking existing password:', err);
            return res.status(500).json({ message: 'Error checking existing password' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Blood bank not found' });
        }

        // Compare passwords
        if (results[0].bloodBankPassword !== password) {
            return res.status(401).json({ message: 'Incorrect password, update failed' });
        }

        // Proceed with updating the blood bank data if passwords match
        const updateQuery = `
            UPDATE blood_bank_registration 
            SET bloodBankName = ?, bloodBankEmail = ?, bloodBankMobileNumber = ?, 
                bloodBankState = ?, bloodBankDistrict = ?, bloodBankTaluq = ?, 
                bloodBankCity = ?, bloodBankAddress = ?, bloodBankPassword = ?
            WHERE bloodBankId = ?`;

        const values = [name, email, mobileNumber, selectedState, selectedDistrict, selectedTaluq, selectedCity, address, password, uniqueId];

        conn.query(updateQuery, values, (error) => {
            if (error) {
                console.error('Error updating blood bank data:', error);
                return res.status(500).json({ message: 'Error updating blood bank data' });
            }
            return res.status(200).json({ message: 'Blood bank data updated successfully' });
        });
    });
};
