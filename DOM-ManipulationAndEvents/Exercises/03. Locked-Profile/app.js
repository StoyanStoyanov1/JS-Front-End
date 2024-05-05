function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll('.profile'));

    for (const profile of profiles) {
        const btn = profile.querySelector('button');
        btn.addEventListener('click', () => {
            const locked = profile.querySelector('input[type=radio]:checked').value === 'lock';
            if (!locked) {
                const info = profile.querySelector('div');
                info.style.display = btn.textContent === 'Show more'? 'block': 'none';
                btn.textContent = btn.textContent === 'Hide it'? 'Show more': 'Hide it';
            }
        });
    }
}
