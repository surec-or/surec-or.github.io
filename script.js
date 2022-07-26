var input = document.getElementById("terminalEntry");
var cmd;

input.focus();
input.select();

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    cmd = document.getElementById("terminalEntry").value;
    console.log(cmd)
    event.preventDefault();
    document.getElementById("enterButton").click();
  if (cmd.toUpperCase() === "HELP"){
    document.getElementById("commandList").style.color="lime";
  }else{
    document.getElementById("commandList").style.color="black";
    if (cmd.toUpperCase() === "PROJECTS"){
      window.location = "subpages/projects/"
    }else if (cmd.toUpperCase() === "LINKS"){
      window.location = "subpages/links/"
    }else if (cmd.toUpperCase() === "BLOG"){
      window.location = "subpages/blog/"
    }
  }
}});
