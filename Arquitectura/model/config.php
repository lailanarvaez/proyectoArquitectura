<?php
	define("__HOST__", "127.0.0.1");
	define("__USER__", "root");
	define("__PASS__", "");
	define("__BASE__", "redsocial");

	class DB {
		private $con = false;
		private $data = array(); 
		private $user = array();

		public function __construct() {
			$this->con = new mysqli(__HOST__, __USER__, __PASS__, __BASE__);
			
			if($this->con->connect_error) {
				die("DB connection failed:" . $con->connect_error);
			}
		}

		public function qryPopUsuario() {
			$sql = "SELECT * FROM usuarios order by id DESC LIMIT 1";
			$qry = $this->con->query($sql);
			if($qry->num_rows == 1) {
				$this->user = $qry->fetch_assoc();
			} else {
				$this->user = null;
			}
		}
	
		public function qryFireUsuario($sql=null) {
			if($sql) $this->con->query($sql);
			$this->qryPopUsuario();
			$this->con->close();
			return $this->user;
		}

		public function qryPop() {
			$sql = "SELECT * FROM `blogs` ORDER BY `id` DESC";
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
		}

		public function qryFire($sql=null) {
			if($sql) $this->con->query($sql);
			$this->qryPop();
			$this->con->close();
			return $this->data;
		}
	}
	
?>
