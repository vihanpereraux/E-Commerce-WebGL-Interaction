document.fonts.ready.then(() => {
    var innerText = document.getElementById("explore-text-1");
    var innerText2 = document.getElementById("explore-text-2");
    var innerText3 = document.getElementById("explore-text-3");
    var innerText4 = document.getElementById("explore-text-4");
    var innerText5 = document.getElementById("explore-text-5");
    var innerText6 = document.getElementById("explore-text-6");

    // getting screen widths in media query pov
    const mediaQueryOne = window.matchMedia('(min-width: 700px)');

    // laptop screens
    if(mediaQueryOne.matches){
        var text = new Blotter.Text("EXPLORE", {
            family: "freigeist-medium",
            size: 100,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });

        var text2 = new Blotter.Text("EXPLORE", {
            family: "freigeist-medium",
            size: 100,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });

        var text3 = new Blotter.Text("EXPLORE", {
            family: "freigeist-medium",
            size: 100,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });

        var text4 = new Blotter.Text("EXPLORE", {
            family: "freigeist-medium",
            size: 100,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });

        var text5 = new Blotter.Text("EXPLORE", {
            family: "freigeist-medium",
            size: 100,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });

        var text6 = new Blotter.Text("EXPLORE", {
            family: "freigeist-medium",
            size: 100,
            fill: "white",
            paddingLeft: 100,
            paddingRight: 100
        });
    }

    let liquidDistortMaterial = new Blotter.LiquidDistortMaterial();
    
    liquidDistortMaterial.uniforms.uSpeed.value = 0.2;
    liquidDistortMaterial.uniforms.uVolatility.value = 0.06;
    liquidDistortMaterial.uniforms.uSeed.value = 0.1;

    let blotter = new Blotter(liquidDistortMaterial, {
        texts: text
    });

    let blotter2 = new Blotter(liquidDistortMaterial, {
        texts: text2
    });

    let blotter3 = new Blotter(liquidDistortMaterial, {
        texts: text3
    });

    let blotter4 = new Blotter(liquidDistortMaterial, {
        texts: text4
    });

    let blotter5 = new Blotter(liquidDistortMaterial, {
        texts: text5
    });

    let blotter6 = new Blotter(liquidDistortMaterial, {
        texts: text6
    });

    let scope = blotter.forText(text);
    scope.appendTo(innerText); 

    let scope2 = blotter2.forText(text2);
    scope2.appendTo(innerText2); 
    
    let scope3 = blotter3.forText(text3);
    scope3.appendTo(innerText3); 

    let scope4 = blotter4.forText(text4);
    scope4.appendTo(innerText4); 
    
    let scope5 = blotter5.forText(text5);
    scope5.appendTo(innerText5); 

    let scope6 = blotter6.forText(text6);
    scope6.appendTo(innerText6); 
});

