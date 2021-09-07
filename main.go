package main

import "fmt"

func soma(a int, b int) int {
	return a + b;
}

func main() {
	total := soma(1,4)
	fmt.Println("O total é:", total)
}