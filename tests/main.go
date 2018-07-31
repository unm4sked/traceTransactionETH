package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/awalterschulze/gographviz"
)

type Summary struct {
	Output  string `json:"output"`
	GasUsed string `json:"gasUsed"`
	Time    int    `json:"time"`
}

type Step struct {
	Pc      int      `json:"pc"`
	Op      int      `json:"op"`
	Gas     string   `json:"gas"`
	GasCost string   `json:"gasCost"`
	Memory  string   `json:"memory"`
	MemSize int      `json:"memSize"`
	Stack   []string `json:"stack"`
	Depth   int      `json:"depth"`
	OpName  string   `json:"opName"`
	Error   string   `json:"error"`
}

func serialize() (Summary, []Step) {
	var step Step
	var steps []Step
	var tmpstr string
	file, err := os.Open("../test.json")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {

		var tmp string = scanner.Text()
		tmpstr = scanner.Text()
		err := json.Unmarshal([]byte(tmp), &step)
		steps = append(steps, step)
		if err != nil {
			panic(err)
		}

	}
	// fmt.Println(tmpstr)
	steps = steps[:len(steps)-1]
	var summary Summary
	err = json.Unmarshal([]byte(tmpstr), &summary)

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
	return summary, steps
}

func GenerateGraph() {
	graphAst, _ := gographviz.ParseString(`digraph G {}`)
	graph := gographviz.NewGraph()
	if err := gographviz.Analyse(graphAst, graph); err != nil {
		panic(err)
	}
	var x string = "X"
	graph.AddNode("G", x, nil)
	graph.AddNode("G", "b", nil)
	graph.AddNode("G", "c", nil)
	graph.AddEdge(x, "b", true, nil)
	graph.AddEdge("b", "c", true, nil)
	output := graph.String()
	//g.Edge(n2, n1, "back").Attr("color", "red")

	fmt.Println(output)
}
func PrintJson(steps []Step, summary Summary) {
	for _, v := range steps {
		fmt.Println(v)
	}
	fmt.Println(summary)
}

func main() {

	// summary, steps := serialize()
	// PrintJson(steps, summary)
	GenerateGraph()
}
