import java.util.List;

public class ExpNode extends UnaryNode {


    public ExpNode(Node parent, String name, List<Node> children) {
        super(parent, name, children);
    }


    @Override
    public String toString() {
        return "exp" + children.get(0).toString() + ")";
    }

    @Override
    public Double eval(Double x) {
        return Math.exp(children.get(0).eval(x));
    }
}
