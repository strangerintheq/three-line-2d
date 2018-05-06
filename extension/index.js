

THREE.EXT = {

    loop: require('raf-loop'),
    normalize: require('normalize-path-scale'),
    arc: require('arc-to'),
    curve: require('adaptive-bezier-curve'),

    Line: require('../')(THREE),
    BasicShader: require('../shaders/basic')(THREE),
    DashShader: require('../test/shader-dash')(THREE),
    GradientShader: require('../test/shader-gradient')(THREE),

    app: require('../test/app')
};


