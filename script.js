document.addEventListener('DOMContentLoaded', function() {
    // Function to handle search logic
    function handleSearch() {
        var input, filter, mobileContainers, i, mobiles, mobile, specs, txtValue;
        input = document.getElementById('searchInput');
        filter = input.value.toUpperCase();
        mobileContainers = document.querySelectorAll('.mobile-container');

        mobileContainers.forEach(function(container) {
            mobiles = container.getElementsByClassName('mobile');
            
            for (i = 0; i < mobiles.length; i++) {
                mobile = mobiles[i];
                specs = mobile.querySelector('.specs');
                txtValue = specs.textContent || specs.innerText;
                
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    mobile.style.display = 'flex';
                } else {
                    mobile.style.display = 'none';
                }
            }
        });
    }

    // Function to handle budget range filter
    function handleBudgetRange() {
        var budgetRange, mobileContainers, i, mobiles, mobile, price, minPrice, maxPrice;
        budgetRange = document.getElementById('budgetRange');
        mobileContainers = document.querySelectorAll('.mobile-container');
        minPrice = parseInt(budgetRange.min);
        maxPrice = parseInt(budgetRange.max);
        // Update displayed budget value
        document.getElementById('budgetValue').textContent = budgetRange.value;

        mobileContainers.forEach(function(container) {
            mobiles = container.getElementsByClassName('mobile');
            
            for (i = 0; i < mobiles.length; i++) {
                mobile = mobiles[i];
                price = parseInt(mobile.dataset.price);
                
                if (price >= minPrice && price <= budgetRange.value) {
                    mobile.style.display = 'flex';
                } else {
                    mobile.style.display = 'none';
                }
            }
        });
    }

    // Event listener for click on search button
    document.getElementById('searchButton').addEventListener('click', handleSearch);

    // Event listener for keydown event on search input
    document.getElementById('searchInput').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    // Event listener for input change on budget range
    document.getElementById('budgetRange').addEventListener('input', handleBudgetRange);

    // Initialize budget range
    handleBudgetRange();
});
        function toggleFilters() {
            var filtersContainer = document.getElementById('filtersContainer');
            var overlay = document.querySelector('.overlay');
            filtersContainer.style.display = (filtersContainer.style.display === 'none' || filtersContainer.style.display === '') ? 'block' : 'none';
            overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'block' : 'none';
        }

        // Function to hide filters container
        function hideFilters() {
            var filtersContainer = document.getElementById('filtersContainer');
            var overlay = document.querySelector('.overlay');
            filtersContainer.style.display = 'none';
            overlay.style.display = 'none';
        }

        // Function to filter results based on selected brands
        function filterResults() {
    var selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(checkbox => checkbox.value.toLowerCase());
    var mobileContainers = document.querySelectorAll('.mobile-container');
    mobileContainers.forEach(function(container) {
        var mobiles = container.querySelectorAll('.mobile');
        mobiles.forEach(function(mobile) {
            var brand = mobile.dataset.brand.toLowerCase();
            if (selectedBrands.length === 0 || selectedBrands.includes(brand)) {
                mobile.style.display = 'flex';
            } else {
                mobile.style.display = 'none';
            }
        });
    });
}


        // Event listener for click on "Toggle Filters" button
        document.getElementById('toggleFiltersButton').addEventListener('click', toggleFilters);

        // Event listener for change in brand checkboxes
        var brandCheckboxes = document.querySelectorAll('.brand-checkbox');
        brandCheckboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', filterResults);
        });

        // Call filterResults initially to ensure correct display
        filterResults();
 // Function to handle sorting based on selected option
 


// Event listener for change in sort select
document.getElementById('resetFiltersButton').addEventListener('click', function() {
    // Uncheck all brand checkboxes
    document.querySelectorAll('.brand-checkbox:checked').forEach(function(checkbox) {
        checkbox.checked = false;
    });

    // Reset the budget range slider
    document.getElementById('budgetRange').value = document.getElementById('budgetRange').max;

    // Call filterResults to apply the reset filters
    filterResults();
});
    document.addEventListener('DOMContentLoaded', function() {
        // Define sorting functions
        const sortFunctions = {
            'name-a-to-z': (a, b) => a.querySelector('.specs h2').textContent.trim().localeCompare(b.querySelector('.specs h2').textContent.trim()),
            'name-z-to-a': (a, b) => b.querySelector('.specs h2').textContent.trim().localeCompare(a.querySelector('.specs h2').textContent.trim()),
            'price-low-to-high': (a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price),
            'price-high-to-low': (a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price)
        };

        // Function to handle sorting based on selected option
        function handleSorting() {
            const sortSelect = document.getElementById('sortSelect');
            const sortingOption = sortSelect.value;
            const mobileContainers = document.querySelectorAll('.mobile-container');

            mobileContainers.forEach(container => {
                const mobiles = Array.from(container.querySelectorAll('.mobile'));
                const sortFunction = sortFunctions[sortingOption];

                if (sortFunction) {
                    mobiles.sort(sortFunction);
                    mobiles.forEach(mobile => container.appendChild(mobile));
                }
            });
        }

        // Call handleSorting initially to ensure initial sorting
        handleSorting();

        // Attach handleSorting function to the change event of sortSelect
        document.getElementById('sortSelect').addEventListener('change', handleSorting);
    });
   