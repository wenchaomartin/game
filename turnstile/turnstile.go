package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"strings"
)
//todo  不会用枚举 以及枚举转化字符串
const ()

var fsm = [2][2]uint{
	//locked unlock		
	 {0, 0}, // push 
	 {1, 1}} //coin

func nextState(currentState uint, event uint) uint {
	return fsm[event][event]
}

func state2String(state uint) (string, error) {
	switch state {
	case 0:
		return "locked", nil
	case 1:
		return "unlock", nil

	}
	return "", errors.New("empty name")

}

func main() {

	currentState := 0
	event := 0
	//for each user input  and then println
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Println(">")
	for scanner.Scan() {
		// fmt.Println(">")2
		s := scanner.Text()
		s = strings.TrimSpace(s)
		switch s {
		case "push":
			event = 0
			str, _ := state2String(fsm[event][currentState])
			fmt.Println(str)
		case "coin":
			event = 1
			str, _ := state2String(fsm[event][currentState])
			fmt.Println(str)
		default:
			fmt.Print(s)
		}

	}

}
