localStorage.setItem("os", navigator.platform.toLocaleLowerCase()) 

const errorlabel = document.getElementById("error-label")
const clidownloadbutton = document.getElementById("clidownload")
const desktopdownloadbutton = document.getElementById("deskdownload")

function download(url = new String(), output = new String()) {
    axios({
          url: url,
          method: 'GET',
          responseType: 'blob'
    })
          .then((response) => {
                const url = window.URL
                      .createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', output);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
          })
}

function download_cli()
{
    if(localStorage.getItem("os").startsWith("linux"))
    {
        console.log("install OS: linux")
        download("assets/download/win/ppm-cli.exe", "ppm-cli.AppImage")

    }
    else if(localStorage.getItem("os").startsWith("mac"))
    {
        console.log("install OS: macOS")
        download("assets/download/win/ppm-cli.exe", "ppm-cli.app")
        
    }
    else if(localStorage.getItem("os").startsWith("win"))
    {
        console.log("install OS: Windows")
        download("assets/download/win/ppm-cli.exe", "ppm-cli.exe")
    }
    else
    {
        clidownloadbutton.replaceWith("Not supported")
        console.log("Current OS Is not supported")
    }
}

function download_desktop()
{
    if(localStorage.getItem("os").startsWith("linux"))
    {
        console.log("install OS: linux")
        download("assets/download/win/ppm-desktop.exe", "ppm-desktop.AppImage")

    }
    else if(localStorage.getItem("os").startsWith("mac"))
    {
        console.log("install OS: macOS")
        download("assets/download/win/ppm-desktop.exe", "ppm-desktop.app")
        
    }
    else if(localStorage.getItem("os").startsWith("win"))
    {
        console.log("install OS: Windows")
        download("assets/download/win/ppm-desktop.exe", "ppm-desktop.exe")
    }
    else
    {
        desktopdownloadbutton.replaceWith("Not supported")
        console.log("Current OS Is not supported")
    }
}