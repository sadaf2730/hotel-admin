from werkzeug.middleware.dispatcher import DispatcherMiddleware
from app import app as guest_app
from admin_app import app as admin_app, run_migrations_and_seed

# Run database migrations and seed default admin credentials on startup
run_migrations_and_seed()

# Merge both apps: serving guest site on '/' and admin panel on '/admin'
application = DispatcherMiddleware(guest_app, {
    '/admin': admin_app
})
