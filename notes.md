## ToDos

-[] Location Show page (cards for each food source?)
-[] Add Location form to Location Show page
-[] Add foodsouce form directly on location show page
-[] Add LocationsContainer and place in MainContainer when on '/'
    -[] Change to connect w/redux for loactions is on locations container instead of main

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
food_sources
regions?
maps?


