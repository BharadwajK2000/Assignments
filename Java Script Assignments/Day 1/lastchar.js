array = ['Bharat','Ajay','Mujaheed','Sandesh','Priya'];
function upcs(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].slice(0,arr[i].length-1) + arr[i].slice(arr[i].length-1).toUpperCase();
    }
    document.write(arr);
}
upcs(array);