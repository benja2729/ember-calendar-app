
module.exports =
  compile:
    options:
      paths: ['<%= dirs.less %>', '<%= dirs.bower %>/bootstrap/less']
      yuicompress: true
    src: ['<%= dirs.less %>/style.less']
    dest: '<%= dirs.css %>/calendar.css'
