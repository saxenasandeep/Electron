const {app, BrowserWindow} = require('electron') ;

let mainWindow;
app.on('ready',()=>{
	mainWindow=new BrowserWindow({
		height:600,
		width:800
	});
	mainWindow.loadURL('File://'+__dirname+'/index.html');   // here dirname will resolve the path of main.js file
});