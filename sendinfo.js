const si = require('systeminformation')

exports.sendInfo = (window)=>{
    setInterval(()=>{
       si.cpuTemperature().then((data)=>{
        window.webContents.send("cpuTemp",data.main)
       }) 
    },3000)

    setInterval(()=>{
        si.currentLoad().then((data)=>{
            window.webContents.send("cpuLoad", Math.round(data.currentLoad))
        })
    },1000)


    setInterval(()=>{
        si.mem().then((data)=>{
            window.webContents.send("memory", data.used / data.total)
        })
    },1000)

}