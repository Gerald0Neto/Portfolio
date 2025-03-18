document.addEventListener("DOMContentLoaded", function() {
    const repositories = document.querySelector('.content-container');

    function getApiGitHub() {
        fetch('https://api.github.com/users/Teslaneto/repos')
            .then(async res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }

                let data = await res.json();
                data.map(item => {
                    let project = document.createElement('div');

                    project.innerHTML = `
                        <div class="project">
                            <div class="divs">
                                <h4 class="title">${item.name}</h4>
                                <span class="date text-color">${ Intl.DateTimeFormat('pt-Br').format( new Date(item.created_at))}</span>
                            </div>
                            <div class="divs">
                                <a class="text-color linkurl" href="${item.html_url}" target="_blank">${item.html_url}</a>
                                <span class="language text-color">
                                    <span class="circle"></span>${item.language}
                                </span>
                            </div>
                        </div>
                    `;
                    repositories.appendChild(project);
                });
            })
            .catch(error => console.error("Erro ao buscar repositórios:", error));
    }
    getApiGitHub();
});