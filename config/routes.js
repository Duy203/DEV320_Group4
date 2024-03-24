/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //Update Pages routes 

/////////////////////////////////////////////////////////here is updated routes.js code:
'/': { view: 'pages/index' },
'/create':{view: 'pages/create'},
'/about': { view: 'pages/about'},
'/help': { view: 'pages/help'},
'/legal': { view: 'pages/legal'},

'GET /updateEvent/:id':'EventController.showUpdateForm',
'POST /updateEvent/:id':'EventController.update',

'POST /events': 'EventController.create',
'GET /listevents': 'EventController.find',
'PUT /events/:id': 'EventController.update',
'DELETE /events/:id': 'EventController.delete'
  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
