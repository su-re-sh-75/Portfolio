$(document).ready(function(){
    projects = [
        {
            "name": "Music Recommendation System",
            "description": "A music recommendation system based on the user's music taste and the music's audio features.",
            "image_path": "images/Music Recommendation System.png",
            "tags":"Python"
        },
        {
            "name": "YouTube Media Downloader",
            "description": "A website to search and download YouTube videos and audios. Made with Python, Django, SQLite, HTML, CSS and JavaScript.",
            "image_path": "images/YT Media Downloader.png",
            "tags": "Django Python HTML CSS"
        },
        {
            "name": "Portfolio Website",
            "description": "A portfolio website designed like VS Code theme, showcasing my projects and skills.",
            "image_path": "images/Portfolio.png",
            "tags":"HTML CSS"
        },
        {
            "name": "Music Player",
            "description": "Music player website with a custom audio player like Spotify. Made with PHP, MySQL, HTML, CSS and JavaScript",
            "image_path": "images/Spotify Music Player.png",
            "tags": "PHP HTML CSS"
        }
    ]
    project_path = {
        "Music Recommendation System": "https://github.com/su-re-sh-75/music-recommender-ml",
        "YouTube Media Downloader": "https://github.com/su-re-sh-75/YouTube-Media-Downloader",
        "Portfolio Website": "https://github.com/su-re-sh-75/Portfolio",
        "Music Player": "https://github.com/su-re-sh-75/spotify-music-player"
    }
    function load_content(tag){
        let code_content = $('.projects');
        if(tag == 'all'){
            proj = projects;
        }else{
            proj = projects.filter(project => project.tags.includes(tag));
        }
        for(let i=0; i<proj.length; i++){
            let code = '';
            code += '<div class="project-card">';
            code += '<p class="project-name">'+proj[i].name+'</p>';
            code += '<div class="project-info">';
            code += '<img src="'+proj[i].image_path+'" alt="'+proj[i].name+'">';
            code += '<p class="project-desc">'+proj[i].description+'</p>';
            code += '</div>';
            code += '</div>';
            code_content.append(code);
        }
    }
    $(".sidebar-link").click(function(){
        let active = $('#sidebar-active');
        active.removeAttr('id');
        $(this).attr('id', 'sidebar-active');
        let tag = $(this).attr('data-tag');
        let code_content = $('.projects');
        code_content.empty();
        load_content(tag);
    });
    $(document).on("click", ".project-card", function () {
        let name = $(this).find(".project-name").text();
        window.open(project_path[name], "_blank");
    });
    load_content('all');
});