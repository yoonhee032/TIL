using System;

class Program
{
    public static void Main(string[] args)
    {
        //for 반복문
        /*
         for(int i=1; i<=10; i++)
        {
            Console.WriteLine(i);
        }
        */

        //while 반복문
        /*
        int i = 1;
        while(i< 11)
        { 
            Console.WriteLine(i); 
            i++;
        }
        */

        //while 반복문 조건이 true일 때
        int i = 1;
        while (true)
        {
            Console.WriteLine(i);
            i++;

            if (i > 10) 
                break;
        }
           
    }
}