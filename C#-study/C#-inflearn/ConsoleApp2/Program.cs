namespace ConsoleApp2
{
    class Program
    {
        public static void Main(string[] args)
        {
            int num = 10;

            if (num == 10)
            {
                Console.WriteLine("10입니다.");
            }
            else if (num == 9)
            {
                Console.WriteLine("9입니다.");
            }
            else
                Console.WriteLine("입력된 값이 10과 9가 아닙니다");
        }
    }
}