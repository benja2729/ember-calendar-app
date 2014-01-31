ember-calendar-app
==================

An adaptation and reword from the starter kit created by [4south](https://github.com/stevekane/4south-ember)

Integrated calendar app using Emberjs

Button styles courtesy of http://tympanus.net/codrops/2013/06/13/creative-button-styles/

Sidebar animation courtesy of http://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/

Experimental Code to save the currently selected events
=====

saveAs(App.iCalObject.create({
events: App.__container__.lookup('controller:' + App.__container__.lookup('controller:application').get('currentResource')).get('filteredEvents')
}).toBlob(), window.location.hash.replace(/^#\//, '').replace(/[\/,]+/g, '.') + ".ics")