<?php

namespace App\Controllers;

class blog extends BaseController
{
    public function index()
    {
        $data = [
                'page_title' => 'Barangay Management System Project',
                'page_heading' => "BMIS"
                ];

        return view('blog_view', $data);
        
    }
    public function getValues(){

        $new_orders = 155;
        $user_count = 50;
        $bounce_rate = 65;
        $unique_visitors = 56;

        //format data in associative array

        $data = array (
            'success' => true,
            'new_orders' => $new_orders,
            'user_count' => $user_count,
            'bounce_rate' => $bounce_rate,
            'unique_visitors' => $unique_visitors
        );
        
        //format data in associative array
        return $this->response->setJSON($data);

        



    }
}
