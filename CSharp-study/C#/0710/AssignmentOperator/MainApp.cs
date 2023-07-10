using System;

namespace AssignmentOperator
{
    class MainApp
    {
        static void Main(string[] args)
        {
            int a;
            a = 100;
            Console.WriteLine($"a = 100 : {a}");
            a += 90;
            Console.WriteLine($"a = 100 : {a}");
            a -= 80;
            Console.WriteLine($"a = 100 : {a}");
            a *= 70;
            Console.WriteLine($"a = 100 : {a}");
            a /= 60;
            Console.WriteLine($"a = 100 : {a}");
            a %= 50;
            Console.WriteLine($"a = 100 : {a}");
            a &= 40;
            Console.WriteLine($"a = 100 : {a}");
            a |= 30;
            Console.WriteLine($"a = 100 : {a}");
            a ^= 20;
            Console.WriteLine($"a = 100 : {a}");
            Console.WriteLine($"a = 100 : {a}");

            a <<= 10;
            Console.WriteLine($"a = 100 : {a}");
            a >>= 1;
            Console.WriteLine($"a = 100 : {a}");

        }
    }
}