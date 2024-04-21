using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C__ConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Sample");
            Console.ReadKey();
            
            //MAP
            Dictionary<string, string> hashMap = new Dictionary<string, string>();
            hashMap.Add("Key", "Value");
            hashMap.Add("Gigi", "IDid");
            //foreach (string key in hashMap.Keys) { Console.WriteLine(hashMap[key]); }
            
            //Split
            String s = "Aman, Shyam, Ram, Lakhan";
            String[] s2 = s.Split(',');
            //foreach (string s3 in s2) { Console.WriteLine(s3); }

            //substring
            string subS = s.Substring(4, 10);
            Console.WriteLine(subS);
            Console.ReadKey();
        }

    }
}
