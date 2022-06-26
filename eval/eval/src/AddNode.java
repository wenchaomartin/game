import java.util.Arrays;
import java.util.List;

public class AddNode implements Node {
    Node leftNode;
    Node rightNode;


    public AddNode(Node leftNode, Node rightNode) {
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }


    @Override
    public Double eval(Double x) {
        return leftNode.eval(x) + rightNode.eval(x);
    }

    @Override
    public String toString() {
        return leftNode.toString() + " + " + rightNode.toString();
    }

    @Override
    public List<Node> getChildren() {
        return null;
    }

    public static void main(String[] args) {
        List<String> tokenList = Arrays.asList("3", "+", "5", "+", "6");
        int current = 0;
        Node node = add(tokenList);
        System.out.println(node);
    }

    public static Node add(List<String> tokens) {
        int current = 0;
        Node node = primary(tokens, current);
        current += 1;
        while (current < tokens.size() && tokens.get(current) == "+") {
            current += 1;
            Node right = primary(tokens, current);
            current += 1;
            node = new AddNode(node, right);
        }
        return node;
    }

    public static Node primary(List<String> tokens, int current) {
        String s = tokens.get(current);
        return new ConstantNode(null, Double.parseDouble(s));
    }


}
