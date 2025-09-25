class ContactBox {
    constructor(options) {
        this.options = Object.assign({
            endpoint: '/contact',
            email: null,
            token: {
                name: '_token',
                value: ''
            },
            language: {
                title: 'Contact Us',
                emailPlaceholder: 'Your email',
                messagePlaceholder: 'Your message',
                emptyEmail: 'Please enter your email',
                emptyMessage: 'Please enter your message',
                invalidEmail: 'Please enter a valid email',
                successMsg: 'Thank you, your message has been sent!',
                buttonText: 'Send'
            },
            color: '#2ab1b1'
        }, options);

        this.init();
    }

    init() {
        this.createElements();
        this.bindEvents();
        this.updateStyles();
    }

    createElements() {
        // Ensure the contact box doesn't already exist
        if (document.querySelector('.contactbox')) {
            return;
        }

        // Create main container
        this.container = document.createElement('div');
        this.container.className = 'contactbox downsized right';
        this.container.innerHTML = `
            <div class="contactbox__button">
                <a href="#" id="contactbox__button-link" style="color: ${this.options.color};">
                    <span class="contactbox__button-title">${this.options.language.title}</span>
                    <span class="contactbox__button-icon">
                        <i class="icon-comment"></i>
                    </span>
                </a>
            </div>
            <div class="contactbox__content">
                <div class="contactbox__header" style="color: ${this.options.color};">
                    <div class="contactbox__header-title">${this.options.language.title}</div>
                    <a id="contactbox__header-cross" href="#" style="color: ${this.options.color};">
                        <i class="icon-cross"></i>
                    </a>
                </div>
                <form method="post" action="${this.options.endpoint}" class="contactbox__form">
                    <input class="form-input" placeholder="${this.options.language.emailPlaceholder}" name="email" id="contactbox__email" type="email" value="${this.options.email || ''}">
                    <div class="contactbox__error-msg"></div>
                    <textarea class="form-input" placeholder="${this.options.language.messagePlaceholder}" rows="7" name="message" id="contactbox__message"></textarea>
                    <div class="contactbox__error-msg"></div>
                    <div id="contactbox__success-msg"></div>
                    <input type="hidden" name="${this.options.token.name}" value="${this.options.token.value}">
                    <input type="submit" value="${this.options.language.buttonText}" style="background-color: ${this.options.color}; border: 1px solid ${this.options.color};">
                </form>
            </div>
        `;

        // Add to body if not already present
        if (!document.querySelector('.contactbox')) {
            document.body.appendChild(this.container);
        }
    }

    bindEvents() {
        // Toggle contact form
        document.addEventListener('click', (e) => {
            const buttonLink = document.getElementById('contactbox__button-link');
            const crossButton = document.getElementById('contactbox__header-cross');
            
            if (e.target === buttonLink || buttonLink.contains(e.target)) {
                e.preventDefault();
                this.toggleContactBox();
            } else if (e.target === crossButton || crossButton && crossButton.contains(e.target)) {
                e.preventDefault();
                this.hideContactBox();
            }
        });

        // Form submission
        const form = document.querySelector('.contactbox__form');
        if (form) {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    toggleContactBox() {
        const content = document.querySelector('.contactbox__content');
        const button = document.querySelector('.contactbox__button');
        
        if (content && button) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            button.classList.toggle('active');
            
            // Focus on email field when opening
            if (content.style.display === 'block') {
                const emailInput = document.getElementById('contactbox__email');
                if (emailInput) {
                    setTimeout(() => emailInput.focus(), 100);
                }
            }
        }
    }

    hideContactBox() {
        const content = document.querySelector('.contactbox__content');
        const button = document.querySelector('.contactbox__button');
        
        if (content && button) {
            content.style.display = 'none';
            button.classList.remove('active');
        }
    }

    updateStyles() {
        // Add styles if not already present
        if (!document.getElementById('contactbox-styles')) {
            const style = document.createElement('style');
            style.id = 'contactbox-styles';
            style.textContent = `
                .contactbox {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                }
                
                .contactbox__button {
                    text-align: right;
                }
                
                .contactbox__button a {
                    display: inline-block;
                    background: #fff;
                    padding: 15px 20px;
                    border-radius: 4px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .contactbox__button a:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
                }
                
                .contactbox__button-title {
                    margin-right: 10px;
                    font-weight: 600;
                }
                
                .contactbox__content {
                    display: none;
                    width: 300px;
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
                    margin-bottom: 15px;
                    overflow: hidden;
                }
                
                .contactbox__header {
                    padding: 15px;
                    font-size: 16px;
                    font-weight: 600;
                    border-bottom: 1px solid #eee;
                    position: relative;
                }
                
                .contactbox__header-cross {
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    text-decoration: none;
                    font-weight: bold;
                }
                
                .contactbox__form {
                    padding: 15px;
                }
                
                .form-input {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                }
                
                textarea.form-input {
                    min-height: 120px;
                    resize: vertical;
                }
                
                .contactbox__form input[type="submit"] {
                    width: 100%;
                    padding: 12px;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 600;
                    transition: background-color 0.3s ease;
                }
                
                .contactbox__form input[type="submit"]:hover {
                    opacity: 0.9;
                }
                
                .contactbox__error-msg {
                    color: #e74c3c;
                    font-size: 12px;
                    margin-top: -8px;
                    margin-bottom: 10px;
                    min-height: 16px;
                }
                
                #contactbox__success-msg {
                    color: #27ae60;
                    font-size: 14px;
                    margin-bottom: 15px;
                    text-align: center;
                    display: none;
                }
            `;
            document.head.appendChild(style);
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    showError(element, message) {
        const errorDiv = element.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('contactbox__error-msg')) {
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
    }

    clearErrors() {
        const errorMessages = document.querySelectorAll('.contactbox__error-msg');
        errorMessages.forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
    }

    showSuccess(message) {
        const successMsg = document.getElementById('contactbox__success-msg');
        if (successMsg) {
            successMsg.textContent = message;
            successMsg.style.display = 'block';
            
            // Hide after 5 seconds
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const emailInput = form.querySelector('input[type="email"]');
        const messageInput = form.querySelector('textarea');
        let isValid = true;
        
        // Clear previous errors
        this.clearErrors();
        
        // Validate email
        if (!emailInput.value.trim()) {
            this.showError(emailInput, this.options.language.emptyEmail);
            isValid = false;
        } else if (!this.validateEmail(emailInput.value.trim())) {
            this.showError(emailInput, this.options.language.invalidEmail);
            isValid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            this.showError(messageInput, this.options.language.emptyMessage);
            isValid = false;
        }
        
        if (!isValid) {
            return false;
        }
        
        // Submit the form via AJAX
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Show success message
                this.showSuccess(this.options.language.successMsg);
                // Reset form
                form.reset();
                // Hide contact box after a delay
                setTimeout(() => this.hideContactBox(), 2000);
            } else {
                // Show error message if any
                if (data.errors) {
                    Object.keys(data.errors).forEach(field => {
                        const input = form.querySelector(`[name="${field}"]`);
                        if (input) {
                            this.showError(input, data.errors[field][0]);
                        }
                    });
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            this.showError(form, 'An error occurred. Please try again.');
        });
    }
}
