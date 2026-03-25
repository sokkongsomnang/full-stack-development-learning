console.log("________________________ Athematic Operators Practice + Function ________________________");
function square(){
    let l = 10;
    let area = l * l
    console.log("Length is " + l)
    console.log("-> Square area is " + area)
}
function rectangle(){
    let w = 10;
    let h = 12;
    let area = h*w
    console.log("Width is " + w)
    console.log("Height is " + h)
    console.log("-> Rectangle area is " + area)
}
function triangle(){
    let b = 13;
    let h = 10;
    let area = (b*h)/2
    console.log("Base is " + b)
    console.log("Height is " + h)
    console.log("-> Rectangle area is " + area)
}
function Rhombus(){
    let D = 10;
    let d = 6;
    let area = (D*d)/2
    console.log("Diagonal 1 is " + D)
    console.log("Diagonal 2 is " + d)
    console.log("-> Rhombus area is " + area)
}
function trapezoid(){
    let B = 5;
    let b = 2;
    let h = 3;
    let area = ((B+b)/2)*h
    console.log("Base 1 is " + B)
    console.log("Base 2 is " + b)
    console.log("Height is " + h)
    console.log("-> Trapezoid area is " + area)
}
function RegularPolygon(){
    let P = 13;
    let a = 10;
    let area = (P/2)*a
    console.log("Perimeter is " + P)
    console.log("Side is " + a)
    console.log("-> RegularPolygon area is " + area)
}
function circle(){
    let r = 12;
    let area = Math.PI*r*r
    console.log("Radius is " + r)
    console.log("-> Circle area is " + area)
    let perimeter = 2*Math.PI*r
    console.log("-> Circle perimeter is " + perimeter)
}
function cone(){
    let r = 13;
    let s = 10;
    let area = Math.PI*r*s
    console.log("Radius is " + r)
    console.log("Slant Height is " + s)
    console.log("-> Cone area is " + area)
}
function sphere(){
    let r = 10;
    let area = 4*Math.PI*r*r
    console.log("Radius is " + r)
    console.log("-> Sphere area is " + area)
}
function main(){
    console.log("_______________ Square _______________")
    square()
    console.log("_______________ Rectangle _______________")
    rectangle()
    console.log("_______________ Triangle _______________")
    triangle()
    console.log("_______________ Rhombus _______________")
    Rhombus()
    console.log("_______________ Trapezoid _______________")
    trapezoid()
    console.log("_______________ RegularPolygon _______________")
    RegularPolygon()
    console.log("_______________ Circle _______________")
    circle()
    console.log("_______________ Cone _______________")
    cone()
    console.log("_______________ Sphere _______________")
    sphere()
}
main()