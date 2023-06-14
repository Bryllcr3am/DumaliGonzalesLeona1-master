<?php

namespace App\Controllers;

class RoutesGetActivity extends BaseController
{
    public function index()
    {
        return view('welcome_message');  
    }




    
    public function displayStudentInfo($student_name,$section)
    {   

        echo $student_name;
        echo "<br>";
        echo $section;
    }
    public function compute($operation,$num1,$num2)
    {   
        /* $difference= $num1-$num2;

        echo $difference;
        */
        if($operation ==='diff'){
            echo $num1-$num2;
        }
        elseif ($operation ==='sum'){
            echo $num1+$num2;
        }
        elseif ($operation ==='prod'){
            echo $num1*$num2;
        }
        elseif ($operation ==='quo'){
            echo $num1/$num2;
        }
        elseif ($operation ==='mod'){
            
            echo $num1%$num2;
        }
    }
   
}

