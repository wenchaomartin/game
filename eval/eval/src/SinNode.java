import java.util.List;

public class SinNode extends UnaryNode {


    public SinNode(Node parent, String name, List<Node> children) {
        super(parent, name, children);
    }


    @Override
    public String toString() {
        return "sin(" + children.get(0).toString() + ")";
    }

    @Override
    public Double eval(Double x) {
        return Math.sin(children.get(0).eval(x));
    }
}
