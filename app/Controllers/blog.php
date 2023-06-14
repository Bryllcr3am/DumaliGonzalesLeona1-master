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
}
