let fileContent = document.getElementById("txtContent");
function myFunction(){
    setTimeout(()=>{
        let regex = /\s+/gi;
        let wordCount = fileContent.value.trim().replace(regex, ' ').split(' ').length;
        let charCounts = fileContent.value.length;
        if(fileContent.value){
            if(document.getElementById("dBtn").disabled)
                document.getElementById("dBtn").disabled= false
            if(document.getElementById("bBtn").disabled)
                document.getElementById("bBtn").disabled= false
            if(document.getElementById("iBtn").disabled)
                document.getElementById("iBtn").disabled= false
            if(document.getElementById("uBtn").disabled)
                document.getElementById("uBtn").disabled= false
            if(document.getElementById("nBtn").disabled)
                document.getElementById("nBtn").disabled= false
            document.getElementById("cBtn").style.visibility="visible"
            document.getElementById("countDiv").innerHTML=`${wordCount} Words ║ ${charCounts} Chars`
            
        }
        else{
            if(!document.getElementById("dBtn").disabled)
                document.getElementById("dBtn").disabled= true
            if(!document.getElementById("bBtn").disabled)
                document.getElementById("bBtn").disabled= true
            if(!document.getElementById("iBtn").disabled)
                document.getElementById("iBtn").disabled= true
            if(!document.getElementById("uBtn").disabled)
                document.getElementById("uBtn").disabled= true
            if(!document.getElementById("nBtn").disabled)
                document.getElementById("nBtn").disabled= true
            document.getElementById("cBtn").style.visibility="hidden"
            document.getElementById("countDiv").innerHTML=""
        }
    },100)
}
if(fileContent)
fileContent.value = "";
function downloadFile() {
        let e = fileContent.value;
        let c = document.createElement("a");
        c.download = "Note"+ ".txt";
        let t = new Blob([e], {
            type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();
}
function myFunctionPopUp() {
    // document.getElementById("copyWrite").style.marginTop="0px"
    // document.getElementById("infoIcon").style.display="none"
    // document.getElementById("helpIcon").style.display="block"
    // document.getElementById("questionIcon").style.display="block"
    // document.getElementById("hOne").innerHTML="About Online Notepad :"
    // document.getElementById("aboutContactUs").style.display="none"
    // document.getElementById("aboutFaq").style.display="none"
    // document.getElementById("aboutContent").style.display="flex"
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function showSelectedSection(selected) {
    if(selected==="aboutContactUs"){
        document.getElementById("copyWrite").style.marginTop="15px"
        document.getElementById("hOne").innerHTML="Contact Us :"
        document.getElementById("aboutFaq").style.display="none"
        document.getElementById("aboutContent").style.display="none"
        document.getElementById("aboutContactUs").style.display="flex"

        document.getElementById("helpIcon").style.display="none"
        document.getElementById("infoIcon").style.display="block"
        document.getElementById("questionIcon").style.display="block"

    }
    else if(selected==="aboutFaq"){
        document.getElementById("hOne").innerHTML="FAQ :"
        document.getElementById("copyWrite").style.marginTop="0px"
        document.getElementById("aboutContactUs").style.display="none"
        document.getElementById("aboutContent").style.display="none"
        document.getElementById("aboutFaq").style.display="block"

        document.getElementById("questionIcon").style.display="none"
        document.getElementById("helpIcon").style.display="block"
        document.getElementById("infoIcon").style.display="block"
    }
    else{
        document.getElementById("copyWrite").style.marginTop="0px"
        document.getElementById("hOne").innerHTML="About Online Notepad :"
        document.getElementById("aboutContactUs").style.display="none"
        document.getElementById("aboutFaq").style.display="none"
        document.getElementById("aboutContent").style.display="flex"

        document.getElementById("infoIcon").style.display="none"
        document.getElementById("helpIcon").style.display="block"
        document.getElementById("questionIcon").style.display="block"
    }
}
function changeStyle(mode) {
    switch (mode) {
        case "b":
            if (fileContent.style.fontWeight === "bold")
                fileContent.style.fontWeight = "normal";
            else
                fileContent.style.fontWeight = "bold";
            break;
        case "i":
            if (fileContent.style.fontStyle === "italic")
                fileContent.style.fontStyle = "normal";
            else
                fileContent.style.fontStyle = "italic";
            break;
        case "c":
                document.getElementById('txtContent').value = ''
                document.getElementById("cBtn").style.visibility="hidden"
                document.getElementById("dBtn").disabled= true
                document.getElementById("bBtn").disabled= true
                document.getElementById("iBtn").disabled= true
                document.getElementById("uBtn").disabled= true
                document.getElementById("nBtn").disabled= true
                document.getElementById("countDiv").innerHTML=""

            break;
        case "n":
            let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if(document.getElementById("txtContent").spellcheck){
                document.getElementById("txtContent").spellcheck=false
                document.getElementById("nBtn").innerHTML="Spell Check";
                if(!isMobile)
                document.getElementById("nBtn").style.paddingTop="10px";
                else
                document.getElementById("nBtn").style.paddingTop="4px";

            }
            else{
                document.getElementById("txtContent").spellcheck=true
                document.getElementById("nBtn").innerHTML="Spell Check ✔";
                if(!isMobile)
                document.getElementById("nBtn").style.paddingTop="7.5px";
                else
                document.getElementById("nBtn").style.paddingTop="1px";
            }
            break;
        case "u":
            if (fileContent.style.textDecoration === "underline")
                fileContent.style.textDecoration = "none";
            else
                fileContent.style.textDecoration = "underline"
            break;

    }
}
