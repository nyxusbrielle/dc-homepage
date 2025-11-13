class CompilationNavigator {
    constructor() {
        // Track current indices for photos and videos
        this.currentPhotoIndex = 1;
        this.currentVideoIndex = 1;
        this.currentScriptIndex = 1;
        this.currentRehearsalIndex = 1;
        
        // Total number of compilations
        this.totalPhotoCompilations = 3;
        this.totalVideoCompilations = 2;
        this.totalScriptCompilations = 2;
        
        // Initialize the navigator
        this.init();
    }
    
    init() {
        // Show first compilation by default
        this.showPhotoCompilation(1);
        this.showVideoCompilation(1);
        this.showScriptCompilation(1);
        // Add event listeners to navigation buttons
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Photo navigation buttons
        const photoPrevBtn = document.getElementById('photo-prev-btn');
        const photoNextBtn = document.getElementById('photo-next-btn');
        
        if (photoPrevBtn) {
            photoPrevBtn.addEventListener('click', () => this.navigatePhotos('prev'));
        }
        
        if (photoNextBtn) {
            photoNextBtn.addEventListener('click', () => this.navigatePhotos('next'));
        }
        
        // Video navigation buttons
        const videoPrevBtn = document.getElementById('video-prev-btn');
        const videoNextBtn = document.getElementById('video-next-btn');
        
        if (videoPrevBtn) {
            videoPrevBtn.addEventListener('click', () => this.navigateVideos('prev'));
        }
        
        if (videoNextBtn) {
            videoNextBtn.addEventListener('click', () => this.navigateVideos('next'));
        }

         // Script navigation buttons
        const scriptPrevBtn = document.getElementById('script-prev-btn');
        const scriptNextBtn = document.getElementById('script-next-btn');
        
        if (scriptPrevBtn) {
            scriptPrevBtn.addEventListener('click', () => this.navigateScript('prev'));
        }
        
        if (scriptNextBtn) {
            scriptNextBtn.addEventListener('click', () => this.navigateScript('next'));
        }

        //   // Script rehearsal buttons
        // const rehearsalPrevBtn = document.getElementById('rehearsal-prev-btn');
        // const rehearsalNextBtn = document.getElementById('rehearsal-next-btn');
        
        // if (rehearsalPrevBtn) {
        //     rehearsalPrevBtn.addEventListener('click', () => this.navigateRehearsal('prev'));
        // }
        
        // if (rehearsalNextBtn) {
        //     rehearsalNextBtn.addEventListener('click', () => this.navigateRehearsal('next'));
        // }
    }
    
    navigatePhotos(direction) {
        if (direction === 'prev') {
            this.currentPhotoIndex = this.currentPhotoIndex > 1 ? 
                this.currentPhotoIndex - 1 : this.totalPhotoCompilations;
        } else if (direction === 'next') {
            this.currentPhotoIndex = this.currentPhotoIndex < this.totalPhotoCompilations ? 
                this.currentPhotoIndex + 1 : 1;
        }
        
        this.showPhotoCompilation(this.currentPhotoIndex);
        this.updatePhotoCounter();
    }
    
    navigateVideos(direction) {
        if (direction === 'prev') {
            this.currentVideoIndex = this.currentVideoIndex > 1 ? 
                this.currentVideoIndex - 1 : this.totalVideoCompilations;
        } else if (direction === 'next') {
            this.currentVideoIndex = this.currentVideoIndex < this.totalVideoCompilations ? 
                this.currentVideoIndex + 1 : 1;
        }
        
        this.showVideoCompilation(this.currentVideoIndex);
        this.updateVideoCounter();
    }

    navigateScript(direction) {
        if (direction === 'prev') {
            this.currentScriptIndex = this.currentScriptIndex > 1 ? 
                this.currentScriptIndex - 1 : this.totalScriptCompilations;
        } else if (direction === 'next') {
            this.currentScriptIndex = this.currentScriptIndex < this.totalScriptCompilations ? 
                this.currentScriptIndex + 1 : 1;
        }
        
        this.showScriptCompilation(this.currentScriptIndex);
        this.updateScriptCounter();
    }

    // navigateRehearsal(direction) {
    //     if (direction === 'prev') {
    //         this.currentRehearsalIndex = this.currentRehearsalIndex > 1 ? 
    //             this.currentRehearsalIndex - 1 : this.totalRehearsalCompilations;
    //     } else if (direction === 'next') {
    //         this.currentRehearsalIndex = this.currentRehearsalIndex < this.totalRehearsalCompilations ? 
    //             this.currentRehearsalIndex + 1 : 1;
    //     }
        
    //     this.showRehearsalCompilation(this.currentRehearsalIndex);
    //     this.updateRehearsalCounter();
    // }
    
    showPhotoCompilation(index) {
        // Hide all photo compilations
        for (let i = 1; i <= this.totalPhotoCompilations; i++) {
            const compilation = document.querySelector(`.compilation-photos${i === 1 ? '' : '-' + i}`);
            if (compilation) {
                compilation.style.display = 'none';
                
                // Hide all child elements
                const elements = compilation.querySelectorAll('h4, li, img, p');
                elements.forEach(el => el.style.display = 'none');
            }
        }
        
        // Show the selected photo compilation
        const targetClass = index === 1 ? '.compilation-photos' : `.compilation-photos-${index}`;
        const targetCompilation = document.querySelector(targetClass);
        
        if (targetCompilation) {
            targetCompilation.style.display = 'flex';
            
            // Show all child elements
            const elements = targetCompilation.querySelectorAll('h4, li, img, p');
            elements.forEach(el => {
                if (el.tagName.toLowerCase() === 'li') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'img') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'p') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'h4') {
                    el.style.display = 'block';
                }
            });
        }
    }

    /*rehearsal*/

    //   showRehearsalCompilation(index) {
    //     // Hide all photo compilations
    //     for (let i = 1; i <= this.totalRehearsalCompilations; i++) {
    //         const compilation = document.querySelector(`.compilation-rehearsal${i === 1 ? '' : '-' + i}`);
    //         if (compilation) {
    //             compilation.style.display = 'none';
                
    //             // Hide all child elements
    //             const elements = compilation.querySelectorAll('h4, li, img, p');
    //             elements.forEach(el => el.style.display = 'none');
    //         }
    //     }
        
    //     // Show the selected photo compilation
    //     const targetClass = index === 1 ? '.compilation-rehearsal' : `.compilation-rehearsal-${index}`;
    //     const targetCompilation = document.querySelector(targetClass);
        
    //     if (targetCompilation) {
    //         targetCompilation.style.display = 'flex';
            
    //         // Show all child elements
    //         const elements = targetCompilation.querySelectorAll('h4, li, img, p');
    //         elements.forEach(el => {
    //             if (el.tagName.toLowerCase() === 'li') {
    //                 el.style.display = 'block';
    //             } else if (el.tagName.toLowerCase() === 'img') {
    //                 el.style.display = 'block';
    //             } else if (el.tagName.toLowerCase() === 'p') {
    //                 el.style.display = 'block';
    //             } else if (el.tagName.toLowerCase() === 'h4') {
    //                 el.style.display = 'block';
    //             }
    //         });
    //     }
    // }


    /*script*/

    showScriptCompilation(index) {
        // Hide all script compilations
        for (let i = 1; i <= this.totalScriptCompilations; i++) {
            const compilation = document.querySelector(`.compilation-script${i === 1 ? '' : '-' + i}`);
            if (compilation) {
                compilation.style.display = 'none';
                
                // Hide all child elements
                const elements = compilation.querySelectorAll('h4, li, img, p');
                elements.forEach(el => el.style.display = 'none');
            }
        }
        
        // Show the selected script compilation
        const targetClass = index === 1 ? '.compilation-script' : `.compilation-script-${index}`;
        const targetCompilation = document.querySelector(targetClass);
        
        if (targetCompilation) {
            targetCompilation.style.display = 'flex';
            
            // Show all child elements
            const elements = targetCompilation.querySelectorAll('h4, li, img, p');
            elements.forEach(el => {
                if (el.tagName.toLowerCase() === 'li') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'img') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'p') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'h4') {
                    el.style.display = 'block';
                }
            });
        }
    }
    
    
    showVideoCompilation(index) {
        // Hide all video compilations
        for (let i = 1; i <= this.totalVideoCompilations; i++) {
            const compilation = document.querySelector(`.compilation-videos${i === 1 ? '' : '-' + i}`);
            if (compilation) {
                compilation.style.display = 'none';
                
                // Hide all child elements
                const elements = compilation.querySelectorAll('h4, li, img, p');
                elements.forEach(el => el.style.display = 'none');
            }
        }
        
        // Show the selected video compilation
        const targetClass = index === 1 ? '.compilation-videos' : `.compilation-videos-${index}`;
        const targetCompilation = document.querySelector(targetClass);
        
        if (targetCompilation) {
            targetCompilation.style.display = 'flex';
            
            // Show all child elements
            const elements = targetCompilation.querySelectorAll('h4, li, img, p');
            elements.forEach(el => {
                if (el.tagName.toLowerCase() === 'li') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'img') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'p') {
                    el.style.display = 'block';
                } else if (el.tagName.toLowerCase() === 'h4') {
                    el.style.display = 'block';
                }
            });
        }
    }
    
    updatePhotoCounter() {
        const counter = document.getElementById('photo-counter');
        if (counter) {
            counter.textContent = `${this.currentPhotoIndex} / ${this.totalPhotoCompilations}`;
        }
    }
    
    updateVideoCounter() {
        const counter = document.getElementById('video-counter');
        if (counter) {
            counter.textContent = `${this.currentVideoIndex} / ${this.totalVideoCompilations}`;
        }
    }

    updateScriptCounter() {
        const counter = document.getElementById('script-counter');
        if (counter) {
            counter.textContent = `${this.currentScriptIndex} / ${this.totalScriptCompilations}`;
        }
    }

    // updateRehearsalCounter() {
    //     const counter = document.getElementById('rehearsal-counter');
    //     if (counter) {
    //         counter.textContent = `${this.currentRehearsalIndex} / ${this.totalRehearsalCompilations}`;
    //     }
    // }
    
    // Public methods to manually navigate
    goToPhotoCompilation(index) {
        if (index >= 1 && index <= this.totalPhotoCompilations) {
            this.currentPhotoIndex = index;
            this.showPhotoCompilation(index);
            this.updatePhotoCounter();
        }
    }
    
    goToVideoCompilation(index) {
        if (index >= 1 && index <= this.totalVideoCompilations) {
            this.currentVideoIndex = index;
            this.showVideoCompilation(index);
            this.updateVideoCounter();
        }
    }

    goToScriptCompilation(index) {
        if (index >= 1 && index <= this.totalScriptCompilations) {
            this.currentScriptIndex = index;
            this.showScriptCompilation(index);
            this.updateScriptCounter();
        }
    }

    // goToRehearsalCompilation(index) {
    //     if (index >= 1 && index <= this.totalRehearsalCompilations) {
    //         this.currentRehearsalIndex = index;
    //         this.showRehearsalCompilation(index);
    //         this.updateRehearsalCounter();
    //     }
    // }
}

// Initialize the navigator when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.compilationNavigator = new CompilationNavigator();
});

// Alternative initialization if DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        window.compilationNavigator = new CompilationNavigator();
    });
} else {
    window.compilationNavigator = new CompilationNavigator();
}


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const popupContainer = document.getElementById('pop-up-container');
    const closeButton = document.querySelector('.close-button i');
    const iframe = document.getElementById('Iframe');

    // Select all clickable elements (photos + videos)
    const allElements = document.querySelectorAll(
        '.compilation-photos li, .compilation-photos-2 li, .compilation-photos-3 li,' +
        '.compilation-videos li, .compilation-videos-2 li, .compilation-videos-3 li, .compilation-videos-4 li, .compilation-videos-5 li,'+
        '.compilation-rehearsal li'
    );

    // Extract the year from the class name
    function getYearFromElement(element) {
        for (let className of element.classList) {
            const yearMatch = className.match(/(\d{4})/);
            if (yearMatch) return yearMatch[1];
        }
        return null;
    }

    // Show popup depending on photo or video
    function showPopup(element, year) {
        popupContainer.style.display = 'flex';
        popupContainer.style.justifyContent = 'center';
        popupContainer.style.alignItems = 'center';
        popupContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        popupContainer.style.position = 'fixed';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';
        popupContainer.style.height = '100%';
        popupContainer.style.zIndex = '9999';

        // Determine whether it's a photo or video
        let iframeSrc = '';

        if (element.closest('.compilation-photos') || element.closest('.compilation-photos-2')|| element.closest('.compilation-photos-3')) {

            iframeSrc = `CollectionPhotos.html#${year}-collection`;

        } else if (element.closest('.compilation-videos') || element.closest('.compilation-videos-2') || 
            element.closest('.compilation-videos-3') || element.closest('.compilation-videos-4')|| element.closest('.compilation-videos-5')) {

            iframeSrc = `CollectionVideos.html#performances-${year}`;

        } else if (element.closest('.compilation-rehearsal')) { 

            iframeSrc = `RehearsalCollection.html#${year}-rehearsal`;
        }

        iframe.src = iframeSrc;
        document.body.style.overflow = 'hidden';
    }

    // Hide popup
    function hidePopup() {
        popupContainer.style.display = 'none';
        iframe.src = '';
        document.body.style.overflow = 'auto';
    }

    // Add click listener
    allElements.forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const year = getYearFromElement(element);
            console.log('Clicked year:', year);
            showPopup(element, year);
        });
    });

    // Close handlers
    closeButton.addEventListener('click', hidePopup);
    popupContainer.addEventListener('click', e => { if (e.target === popupContainer) hidePopup(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') hidePopup(); });

    hidePopup();


});



// Additional CSS that should be added to your stylesheet
const additionalCSS = `
    #pop-up-container {
        display: none;
    }
    
    .compilation-photos li,
    .compilation-photos-2 li,
    .compilation-photos-3 li,
    .compilation-photos-4 li,
    .compilation-videos li,
    .compilation-videos-2 li,
    .compilation-videos-3 li,
    .compilation-videos-4 li,
    .compilation-videos-5 li {
        transition: all 0.3s ease;
    }
    
    .compilation-photos li:hover,
    .compilation-photos-2 li:hover,
    .Photos2025:hover,
    // .compilation-photos-4 li:hover,
    .compilation-videos li:hover,
    .Videos2025:hover{
    // .compilation-videos-3 li:hover,
    // .compilation-videos-4 li:hover,
    // .compilation-videos-5 li:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
`;

// Function to inject CSS
function injectCSS() {
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
}

// Inject CSS when DOM is loaded
document.addEventListener('DOMContentLoaded', injectCSS);







// Script Images Fullscreen Viewer
document.addEventListener('DOMContentLoaded', function() {
    // Create fullscreen overlay for script images
    const scriptOverlay = document.createElement('div');
    scriptOverlay.id = 'script-fullscreen-overlay';
    scriptOverlay.innerHTML = `
        <div class="script-fullscreen-content">
            <span class="script-close-btn">&times;</span>
            <div class="script-img-container">
                <img class="script-fullscreen-img" src="" alt="Script Image">
            </div>
        </div>
    `;
    document.body.appendChild(scriptOverlay);

    // Add CSS styles
    const styles = `
        #script-fullscreen-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            justify-content: center;
            align-items: center;
        }

        .script-fullscreen-content {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .script-img-container {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .script-fullscreen-img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
            transition: transform 0.2s ease;
            user-select: none;
        }

        .script-close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            color: white;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s;
            z-index: 10001;
            background-color: rgba(0, 0, 0, 0.5);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1;
        }

        .script-close-btn:hover {
            color: #ff4444;
            background-color: rgba(0, 0, 0, 0.8);
        }

        /* Make script items clickable */
        .compilation-script li,
        .compilation-script-2 li,
        .compilation-script-3 li,
        .compilation-script-4 li {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .compilation-script li:hover,
        .compilation-script-2 li:hover,
        .compilation-script-3 li:hover,
        .compilation-script-4 li:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Get all script elements
    const allScriptElements = document.querySelectorAll(
        '.compilation-script li, .compilation-script-2 li, .compilation-script-3 li, .compilation-script-4 li'
    );

    const fullscreenImg = scriptOverlay.querySelector('.script-fullscreen-img');
    const imgContainer = scriptOverlay.querySelector('.script-img-container');
    const closeBtn = scriptOverlay.querySelector('.script-close-btn');

    let currentScriptIndex = 0;
    let visibleScriptElements = [];

    // Function to get currently visible script elements
    function getVisibleScriptElements() {
        return Array.from(allScriptElements).filter(el => {
            const parent = el.parentElement;
            return parent && window.getComputedStyle(parent).display !== 'none';
        });
    }

    // Function to open fullscreen
    function openFullscreen(element, index) {
        visibleScriptElements = getVisibleScriptElements();
        currentScriptIndex = visibleScriptElements.indexOf(element);
        
        const img = element.querySelector('img');
        if (img) {
            fullscreenImg.src = img.src;
            fullscreenImg.alt = img.alt;
            scriptOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            resetZoom();
        }
    }

    // Function to close fullscreen
    function closeFullscreen() {
        scriptOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        fullscreenImg.src = '';
    }

    // // Function to show next image
    // function showNextImage() {
    //     if (currentScriptIndex < visibleScriptElements.length - 1) {
    //         currentScriptIndex++;
    //         const nextElement = visibleScriptElements[currentScriptIndex];
    //         const img = nextElement.querySelector('img');
    //         if (img) {
    //             fullscreenImg.src = img.src;
    //             fullscreenImg.alt = img.alt;
    //             resetZoom();
    //             updateNavigationButtons();
    //         }
    //     }
    // }

    // // Function to show previous image
    // function showPreviousImage() {
    //     if (currentScriptIndex > 0) {
    //         currentScriptIndex--;
    //         const prevElement = visibleScriptElements[currentScriptIndex];
    //         const img = prevElement.querySelector('img');
    //         if (img) {
    //             fullscreenImg.src = img.src;
    //             fullscreenImg.alt = img.alt;
    //             resetZoom();
    //             updateNavigationButtons();
    //         }
    //     }
    // }

    // // Update navigation buttons state
    // function updateNavigationButtons() {
    //     prevBtn.disabled = currentScriptIndex === 0;
    //     nextBtn.disabled = currentScriptIndex === visibleScriptElements.length - 1;
    // }

    // Add click listeners to all script elements
    allScriptElements.forEach((element, index) => {
        element.addEventListener('click', function(e) {
            // Prevent opening if clicking was meant for navigation
            if (e.target.closest('button')) {
                return;
            }
            openFullscreen(element, index);
        });
    });

    // Close button click
    closeBtn.addEventListener('click', closeFullscreen);

    // Close on overlay click (but not on content click)
    scriptOverlay.addEventListener('click', function(e) {
        if (e.target === scriptOverlay) {
            closeFullscreen();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (scriptOverlay.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeFullscreen();
            } else if (e.key === '+' || e.key === '=') {
                zoomIn();
            } else if (e.key === '-' || e.key === '_') {
                zoomOut();
            } else if (e.key === '0') {
                resetZoom();
            }
        }
    });
});
