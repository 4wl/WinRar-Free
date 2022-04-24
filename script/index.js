const http = require('https');
const fs = require('fs');

var os = process.platform;

if (os == 'darwin') {
    console.log("Mac OS Is Not Supported");
}else if(os == 'win32'){
    try {
        if (fs.existsSync('C:\\Program Files\\WinRAR\\rarreg.key')) {
            console.log('Download Failed: File Aready Exists At "C:\\Program Files\\WinRAR\\rarreg.key"' );
    } 
    } catch {
        const file = fs.createWriteStream("C:\\Program Files\\WinRAR\\rarreg.key");
        const request = http.get("https://raw.githubusercontent.com/ThnksCJ/WinRar-Free/main/rarreg.key", function(response) {
        response.pipe(file);

        file.on("finish", () => {
            file.close();
                console.log('Download Completed, File Located At "C:\\Program Files\\WinRAR\\rarreg.key"');
            });
        });
    }
}else{
    console.log("Your OS Is Not Supported")
}
