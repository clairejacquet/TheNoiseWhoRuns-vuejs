# Présentation Perso Claire

`Lilloise` `développeuse en herbe` `O'Clock` `front` `english` `animal crossing` `trentenaire`

Bonjour à toi qui me lit! Je m’appelle Claire et j’ai 33 ans. Je suis en reconversion pro pour devenir développeuse côté front 😀.

Avant ça je faisais du web-marketing (j’ai aussi fait un peu de restauration et du support technique). C’était un métier que je faisais plus par obligation que par passion mais cela m’a permis de découvrir une appétence pour le code et de réaliser que je veux en faire mon métier !

J’habite à Lille depuis 4 ans et avant ça, j’ai vécu à l’étranger pendant 10 ans (Dublin et à Barcelone) . Voila un peu ma vie en quelques lignes. Bref...J’ai hâte qu’on commence la formation 🎉 !



👉 Mon portfolio pour les petits curieux: [cookiesandwifi.ovh](http://cookiesandwifi.ovh/dentist-vuejs/)


------


## Key Elements in the project

* **VUE CLI 3** : The project was put together using Vue Cli 3 for rapid Vue.js developement. A previous version of this showcase site was done in Vue Cli 2. I wanted to improve the previous version of the site not only in regards to what was 'under the hood' but also improve its design. This was an excellent exercise to practise using Vue Cli 3. The overall results in a structured and clean project.

* **Importing global styles in Vue CLI** : The great thing about Vue Cli was being able to easily integrate librairies/frameworks through `node JS`. An example of this was adding Bootstrap 4 to the project. However the website is mainly custom designed using SASS. I added global stylesheets (mainly variables and mixins) that were automatically applied to all template components and views. This made life easier as they were automatically added to each template (unlike Vue Cli 2 where global stylesheets had to be manually added to each template style section!). Also as templates have their own style section this generally gives the project a clear structure and avoids messy stylesheets.

* **Vue Events and Conditional Rendering** : The hamburger navigation menu for mobile opens on the `@click` Vue event handler. The `v-if` directive basically toggles the style class which opens and exits the navigation menu for mobile.



Additional elements added for the site's SEO was a sitemap generated [here](https://www.xml-sitemaps.com/) and added at the root of the project, as well as Meta-Data (plugin `vue-head`) including search engine tags and social media tags. A Google Analytics tag was also added at the bottom of the page track of the site's activity.

![preview](https://github.com/clairedonut/cabinet-dentaire-vuejs/blob/master/screencapture-cookiesandwifi-ovh-dentist-vuejs-2019-05-01-12_02_31.png?raw=true)
