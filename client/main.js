import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(function() {
    if (Meteor.isClient) {
        return SEO.config({
            title: 'The Creative.cat - Web Label Production',
            meta: {
                'description': 'The Creative.cat is building products who solve real life problems'
            },
            og: {
              'image': 'http://www.thecreative.cat/img/facebook.jpg',
              'url': 'http://www.thecreative.cat/social_landing_fb'//'image': 'http://manuel-schoebel.com/images/authors/manuel-schoebel.jpg'
            },
            twitter : {
                'image': 'http://www.thecreative.cat/img/twitter.jpg',
                'url': 'http://www.thecreative.cat/social_landing_tw'
           }
        });
    }
});
// Setting up routes
Router.route('/', function () {
  this.render('home');
  // Setting up seo data
    return SEO.config({
      title : 'The Creative.cat - Homepage',
      meta : {
        'description' : 'The Creative.cat - projets personnels de Jérôme Commaret'
      }
    })
});

// when you navigate to "/one" automatically render the template named "One".
Router.route('/moi', function (){
  this.render('moi');
  //
  return SEO.config({
    title :'The Creative.cat - Qui suis-je ?',
    meta : {
      'description' : 'Jérôme Commaret'
    }
  })
});

Router.route('/experiments', function (){
  this.render('experiments');
  //
  return SEO.config({
    title :'The Creative.cat - Expérimentations ?',
    meta : {
      'description' : 'T\'es où - Twélé.tv - SPXL - Porncat'
    }
  })
});
