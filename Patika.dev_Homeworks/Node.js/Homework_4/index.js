const fs = require('fs');

// CREATE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) {
        console.log("Error creating file:", err);
    } else {
        console.log("File created successfully!");

        // READ
        fs.readFile('employees.json', 'utf8', (err, data) => {
            if (err) {
                console.log("Error reading file:", err);
            } else {
                console.log("File content:", data);

                // UPDATE
                const updatedData = '{"name": "Employee 1 Updated", "salary": 3000}';
                fs.writeFile('employees.json', updatedData, 'utf8', (err) => {
                    if (err) {
                        console.log("Error updating file:", err);
                    } else {
                        console.log("File updated successfully!", updatedData);

                        // DELETE
                        fs.unlink('employees.json', (err) => {
                            if (err) {
                                console.log("Error deleting file:", err);
                            } else {
                                console.log("File deleted successfully!");
                            }
                        });
                    }
                });
            }
        });
    }
});


