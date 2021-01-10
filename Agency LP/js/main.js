/* Script for a section products - tabs */
let tab = function () {
    let tabNav = document.querySelectorAll('.tabItem'),
        tabContent = document.querySelectorAll('.tabContent'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('content-active') : item.classList.remove('content-active');
        });
    }

};
tab();

/* Script for a section team - GalleryTabs */
function openCity(evt, workerName, workerSkills) {
  var i, teamTabContent, workSotBtn, workSkillsItem;

  teamTabContent = document.getElementsByClassName("teamTabContent");
  for (i = 0; i < teamTabContent.length; i++) {
    teamTabContent[i].style.display = "none";
  }

  workSkillsItem = document.getElementsByClassName("workSkillsItem");
  for (i = 0; i < workSkillsItem.length; i++) {
    workSkillsItem[i].style.display = "none";
  }

  workSotBtn = document.getElementsByClassName("workSotBtn");
  for (i = 0; i < workSotBtn.length; i++) {
    workSotBtn[i].className = workSotBtn[i].className.replace(" active", "");
  }

  document.getElementById(workerName).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById(workerSkills).style.display = "block";
}