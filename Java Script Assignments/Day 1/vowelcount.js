string='CITIUSTECH';
function vowel(str)
{
    voweldict={'A':false,'E':false,'I':false,'O':false,'U':false}
    for(let i=0;i<str.length;i++)
    {
        if(str[i] in voweldict)
            {
                voweldict[str[i]]=true;
            }
    }
    count=0;
    for(let key in voweldict)
    {
        if(voweldict[key]==true)
        {
            count=count+1;
        }
    }
    console.log(count);
}
vowel(string);