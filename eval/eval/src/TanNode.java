import java.util.List;

public class TanNode extends UnaryNode {


    public TanNode(Node parent, String name, List<Node> children) {
        super(parent, name, children);
    }


    @Override
    public String toString() {
        return "tan" + children.get(0).toString() + ")";
    }

    @Override
    public Double eval(Double x) {
        return Math.tan(children.get(0).eval(x));
    }
}
