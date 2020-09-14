## ToDos

- [x] why is Location undefined in the router in App and also in Location component??? does it have to do with this not being asyc? console.log(locations) brings up `undefined` first and then the appropriate array when doing it within Location component. (solved for now by only rendering locations components after locactions is greater than zero, and also fixing the find function because id was a string, not an integer)
- [x] add "LOAD_LOCATIONS" to fetchLocations Action
- [x] Location Show page (list items for each food source?)
- [x] Add Location form to Location Show page
- [x] Link Location Card to Location show page
- [x] after new location form is submitted, redirect to newly create location's show page
- [x] update address info that shows on location show page
- [x] re-evaluate when to passdown props and when to mapStateToProp
    - [ ] fix app rendering/performance
    - [x] pass locations down to individual location. set place in Location component. 
    - [ ] ~~save currentLocation to store/state?~~
    - [ ] ~~Add currentLocation to local state of Location component?~~
- [x] Add foodsouce form directly on location show page
- [x] Get foodsource form post fetch working
    - [x] Save foodsource to backend
    - [ ] Should I fetchLocation upload location pageload? or Add Foodsource to location state?
    - [x] Reset FoodSource form
    - [x] set renderForm to false
    - [x] reload location
    - [ ] STRETCH: Add Foodsources to store for ALL foodsources(fetch foodsources in a component did mount somewhere)
- [x] Hide add foodsource form until button is clicked
- [ ] fix up styled form component
- [x] Add "About" component and blurb
- [ ] Improve Readme
- [x] Blog: https://medium.com/swlh/react-redux-fundamentals-7438b4638e57?source=friends_link&sk=aa9092ba310c7c50c47c98cd1c542367
- [ ] Safely re-add API key
- [x] Add MapContainer to homepage
- [x] Place markers for each location 
- [ ] STRETCH: Use Marker clustering
- [ ] Add LocationsContainer and place in MainContainer when on '/'
    - [ ] Change to connect w/redux for loactions is on locations container instead of main
- [ ] STRETCH: Improve performance of map with clustering?
- [ ] STRETCH: add update/delete functionality for locations/foodsources
- [ ] STRETCH: add user login/logout
- [ ] STRETCH: limit edit/delete to owner of location/foodsource
- [ ] STRETCH: add map to location show page
- [ ] STRETCH: add map filters so map will change depending on region, etc.
- [ ] STRETCH: clicking on Location Cards will popup info window on map
- [ ] STRETCH: Add Search
- [ ] STRETCH: Customize map markers based on category
- [ ] STRETCH: Stylize map
- [ ] TODO: change renderFoodSourceForm to toggleFoodSourceForm
- [ ] TODO: add instructions to forms or about page
- [ ] TODO: right now user_id and availability are hardcoded into the food source form's FormData in the fooSourceForm reducer as initial state. Update as you add users and availability
- [ ] TODO: right now user_id, region_id and zoom are hardcoded into the location forms's FormData in the locationForm reducer as initial state. Update this as you add user and regional functionality (and consider removing zoom data from database and only using it on frontend?)
- [ ] TODO: LocationForm input for lat and lng currently number with step 'any', ideally this would be set so only valid lat and lng numbers would be accepted.
- [x] TODO: lat and lng are being serialized as strings because they are decimals, i believe this is the intended behavior to maintain accuracy. gotta figure out where to convert (I do parse back into floats when adding a new location)
- [x] TODO: remove default props if not needed (consider revisiting loading and getting rid of the conditional render in LocationsContainer)

## Components:
- App
    - NavBar
        - Navlink: About?
        - NavLink: MyFoodSources
        - NavLink: FoodSourceForm (new location or add foodsource to existing location)
        - Login?
        - Logout?
        - Signup?
    - MainContainer (state: currentUser?, currentRegion?)
    
        - LocationsContainer (state: currentRegion, currentLocations, currentLocation, allLocations?)
            - Filter? (by region)
            - Search? (by zipcode?)
            - LocationList (All Locations, my locations)
                - LocationCard
                    - LocationShowPage
                        - FoodSourceInput (Add FoodSource to this location)
                    - LocationInput
            - MapContainer
                - Map(currentLocations)
                    - Marker(Location)


## Reducers

locations
(my locations?)
current location?
food_sources
(my foodsources?)
regions?
maps?
loginform
currentuser


