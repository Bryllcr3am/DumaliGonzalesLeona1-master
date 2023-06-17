<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run()
    {
        //create values
        $data = [
                    ['role_name'=>'admin','role_description'=>'Administrator','role_status'=>'1'],
                    ['role_name'=>'user','role_description'=>'User','role_status'=>'0' ]

        ];

        // Simple Queries
        $this->db->table('tbl_roles')->insertBatch($data);
    }
}
