isMoving = false;


function toggleMovementState(){
  isMoving = !isMoving
}

function togglePage(page){
  page.classList.toggle('pageOpen')
}

function toggleTabs(id, page) {

  const tabs = document.getElementsByClassName('fullpage')
  function changeTabs () {
    for (let i = 0; i < tabs.length ; i++ ) {
      console.log(tabs[i])
      if (tabs[i].id!==id) {
        const currentDisplay = tabs[i].style.display
        tabs[i].style.display = currentDisplay==='none'? 'block' : 'none'
      }
    }
  }

  

  const isOpen = page.classList.contains('pageOpen')

  if (!isOpen){
    setTimeout(changeTabs, 1500)
  }else{
    changeTabs()
  }

  
  
}


function toggle (id, idTab) {
  if (!isMoving){

    const page = document.getElementById(id)

    toggleMovementState()
    togglePage(page)
    toggleTabs(idTab, page)
    
    window.setTimeout(toggleMovementState, 2000)
  }
}







