import React from 'react';

function Footer() {
    return (
        <footer>
        <div class="card text-center pt-5">
            <div class="card-header">
                Created to Create
            </div>
            <div class="card-body">
                <p class="card-text">If you've enjoyed this site, please feel free to learn more about me on...</p>
                <a href="https://www.linkedin.com/in/curtis-henderson-b22a0271/" class="btn btn-primary">LinkedIn</a>
                <a href="https://chender93.github.io/curtishenderson/" class="btn btn-info">GitHub</a>
                <a href="https://stackoverflow.com/users/14003024/curtis-henderson" class="btn btn-primary">Stack Overflow</a>
            </div>
            <div class="card-footer text-muted">
                Created by Curtis Henderson, 2021
            </div>
        </div>
    </footer>
    )
}

export default Footer;