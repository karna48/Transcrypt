// Transcrypt'ed from Python, 2018-04-02 17:12:33
import {__envir__, __nest__, __init__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
import {_debug, _ns, _svg, _defaultElement, _width, _height, _offset, _rightSize, bgcolor, setDefaultElement, _allTurtles, Turtle, _defaultTurtle, _timer, reset, py_clear, ontimer, done, pensize, color, home, goto, position, pos, distance, up, down, forward, back, circle, left, right, begin_fill, end_fill, speed} from './turtle.js';
up ();
goto (-(250), -(21));
export var startPos = pos ();
down ();
color ('red', 'yellow');
begin_fill ();
while (true) {
	forward (500);
	right (170);
	if (distance (startPos) < 1) {
		break;
	}
}
end_fill ();
done ();

//# sourceMappingURL=star.map