img = document.getElementById("slider");
images = ["img_mountains.jpg","img_snowtops.jpg","img_lights.jpg","img_forest.jpg"];
num = 0;
function next()
{
    
    num++;
    if(num==images.length)
    {
        num = 0;
    }
    
    img.src = images[num];
    

}
function prev()
{
    num--;
    if(num<0)
    {
        num = images.length - 1;
    }
    img.src = images[num];
    
}
