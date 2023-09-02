const URL_REPO_STARS = "https://img.shields.io/github/stars/donatto22/ax-calculator?style=social"

function swalSupport() {
    Swal.fire({
        iconHtml: '&#10084;',
        title: 'Suport calculator',
        html: `<img style="width: auto !important" alt="GitHub Repo stars" src=${URL_REPO_STARS}>`,
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}