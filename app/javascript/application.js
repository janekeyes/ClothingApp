// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "bootstrap"
import "@hotwired/turbo-rails"
import "controllers"

$.ajax({
    type: "POST",
    url: "/items",
    data: formData,
    headers: {
      "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
    },
    success: function(response) {
    },
    error: function(xhr, status, error) {
    }
  });
  