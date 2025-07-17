function toogleBar(){
    const navList = document.querySelector('.nav-list')
    if(navList.style.display === 'flex'){
        navList.style.display = 'none'
    }else{
        navList.style.display = 'flex'
    }
}